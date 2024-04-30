import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCategories() {

    const router = useRouter();
    const categories = ref({})
    const category = ref({})
    const validationErrors = ref({})

    const getCategories = async () => {
        await axios.get('/api/categories')
            .then(response => {
                categories.value = response.data.data
            })
            .catch(error => console.log(error))
    }

    const getCategory = async (id) => {
        await axios.get(`/api/categories/${id}`)
            .then(response => {
                category.value = response.data.data
            })
            .catch(error => console.log(error))
    }

    const storeCategory = async (categoryData) => {

        validationErrors.value = {}

        await axios.post('/api/categories', categoryData)
            .then(response => {
                router.push({ name: 'categories.index' })
                getCategories()
            })
            .catch(errors => {
                if (errors.response?.data)
                    validationErrors.value = errors.response.data.errors
            })
    }

    const updateCategory = async (categoryData) => {

        validationErrors.value = {}

        await axios.put(`/api/categories/${categoryData.id}`, categoryData)
            .then(response => {
                router.push({ name: 'categories.index' })
                getCategories()
            })
            .catch(errors => {
                if (errors.response?.data)
                    validationErrors.value = errors.response.data.errors
            })
    }

    const deleteCategory = async (id) => {
        await axios.delete(`/api/categories/${id}`)
            .then(response => {
                router.push({ name: 'categories.index' })
                getCategories()
            })
            .catch(error => console.log(error))
    }

    return {
        categories,
        category,
        validationErrors,
        getCategories,
        getCategory,
        storeCategory,
        updateCategory,
        deleteCategory
    }

}
