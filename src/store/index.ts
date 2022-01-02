import { createStore } from "vuex"
import {Company, SortingType} from "../components/Types";

export default createStore({
    state: {
        companies: [
            {
                id: "2b26c20e-63c0-4146-a626-1f3035065d77",
                image: "https://cdn.lucasferraz.com.br/img/2021/01/facebook.jpg",
                documentType: "CNPJ",
                document: "31.425.024/0001-16",
                name: "Facebook",
                email: "facebook@gmail.com",
                openingDate: new Date(),
                address: {
                    postalCode: "80320320",
                    address: "rua ssss",
                    numberAddress: "23",
                    complement: "predio ABC",
                    district: "Centro",
                    uf: "PR",
                    city: "Curitiba"
                }
            },
            {
                id: "47f34c13-69ae-4457-a481-1af76d2eaff8",
                image: "https://cdn.lucasferraz.com.br/img/2021/01/facebook.jpg",
                documentType: "CNPJ",
                document: "31.4658.024/0001-16",
                name: "Teste",
                email: "teste@gmail.com",
                openingDate: new Date(),
                address: {
                    postalCode: "82325320",
                    address: "rua rrrrr",
                    numberAddress: "56",
                    complement: "predio eee",
                    district: "Sinfonia",
                    uf: "SC",
                    city: "Florianópolis"
                }
            },
            {
                id: "ba7cf7af-bfe3-4873-85f1-f8e1ab8e1e08",
                image: "https://cdn.lucasferraz.com.br/img/2021/01/facebook.jpg",
                documentType: "CNPJ",
                document: "31.4658.024/0001-16",
                name: "Google",
                email: "teste@gmail.com",
                openingDate: new Date(),
                address: {
                    postalCode: "82325320",
                    address: "rua rrrrr",
                    numberAddress: "56",
                    complement: "predio eee",
                    district: "Sinfonia",
                    uf: "SC",
                    city: "Florianópolis"
                }
            }
        ]
    },

    mutations: {
        saveNewCompany(state, newCompany) {
            state.companies.push(newCompany)
        }
    },

    actions: {
        saveNewCompany({ commit }, newCompany: Company) {
            commit('saveNewCompany', newCompany)
        }
    },

    getters: {
        filteredCompanies: (state) => (sort: SortingType) => {
            console.log(sort)
            if (sort === "ASC") {
                // @ts-ignore
                return state.companies.sort(ascSort)
            }

            // @ts-ignore
            return state.companies.sort(descSort)
        }

    },

    modules: {}
})


const ascSort = (x: Company, y: Company) => {
    if (x.name > y.name) {
        return 1;
    }
    if (x.name < y.name) {
        return -1;
    }
    return 0;
}

const descSort = (x: Company, y: Company) => {
    if (x.name < y.name) {
        return 1;
    }
    if (x.name > y.name) {
        return -1;
    }
    return 0;
}
