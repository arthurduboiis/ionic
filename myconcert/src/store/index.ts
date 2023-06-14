import { createStore, Store, useStore as baseUseStore, GetterTree, ActionTree, MutationTree } from 'vuex'
import { InjectionKey } from 'vue'
import axios from 'axios'

export type Category = {
    id: number;
    libelle: string;
    user_id: number;
    created_at: string;
    updated_at: string;
}

export type Concert = {
    id: number;
    nom: string;
    description: string;
    categorie_id: number;
    user_id: number;
    image: string;
    date: string;
    heure: string;
    created_at: string;
    updated_at: string;
}

export type User = {
    login: string;
    id: number;
}

export type State = {
    categories: Category[];
    concerts: Concert[];
    users: User[];
    connectedUser: boolean | null;
}
const state: State = {
    categories: [],
    concerts: [],
    users: [],
    connectedUser: null
}

const getters: GetterTree<State, State> = {
    getCategories: state => state.categories,
    getCategoryById: (state) => (id: number) => {
        return state.categories.find(category => category.id === id)
    },
    getConcerts: state => state.concerts,
    getConcertById: (state) => (id: number) => {
        return state.concerts.find(concert => concert.id === id)
    },
    getUsers: state => state.users,

}

const actions: ActionTree<State, State> = {
    userLogin(state, userForm) {
        console.log(userForm)
        axios.post('http://localhost:8082/api/user/login', userForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('userLogin', userForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    getAllCategories(state) {
        axios.get('http://localhost:8082/api/categories')
            .then((response) => {
                if (response.status == 200) {
                    state.commit('getAllCategories', response.data)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    getAllConcerts(state) {
        axios.get('http://localhost:8082/api/concerts')
            .then((response) => {
                if (response.status == 200) {
                    state.commit('getAllConcerts', response.data)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    getAllUsers(state) {
        axios.get('http://localhost:8082/api/user')
            .then((response) => {
                if (response.status == 200) {
                    state.commit('getAllUsers', response.data)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    addConcert(state, concertForm) {
        console.log(concertForm.value)
        axios.post('http://localhost:8082/api/concerts', concertForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('addConcert', concertForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    addCategory(state, categoryForm) {
        axios.post('http://localhost:8082/api/categories', categoryForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('addCategory', categoryForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    addUser(state, userForm) {
        axios.post('http://localhost:8082/api/user/register', userForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('addUser', userForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    deleteConcert(state, id:number) {
        axios.delete('http://localhost:8082/api/concerts/'+id)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('deleteConcert', id)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    deleteCategory(state, id:number) {
        axios.delete('http://localhost:8082/api/categories/'+id)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('deleteCategory', id)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    deleteUser(state, id:number) {
        axios.delete('http://localhost:8082/api/user/'+id)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('deleteUser', id)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    updateConcert(state, concertForm) {
        axios.put('http://localhost:8082/api/concerts/'+concertForm.value.id, concertForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('updateConcert', concertForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            }
            );
    },
    updateCategory(state, categoryForm) {
        axios.put('http://localhost:8082/api/categories/'+categoryForm.value.id, categoryForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('updateCategory', categoryForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    updateUser(state, userForm) {
        axios.put('http://localhost:8082/api/users/'+userForm.value.id, userForm.value)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('updateUser', userForm)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => {
                console.log(error)
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    getConcert(state, id:number) {
        axios.get('http://localhost:8082/api/concerts/'+id)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('getConcert', response.data)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => { 
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    getCategory(state, id:number) {
        axios.get('http://localhost:8082/api/categories/'+id)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('getCategory', response.data)
                    console.log(response.data)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => { 
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    getUser(state, id:number) {
        axios.get('http://localhost:8082/api/users/'+id)
            .then((response) => {
                if (response.status == 200) {
                    state.commit('getUser', response.data)
                }
                else {
                    return { "statut": response.status, "message": response.statusText }
                }
            }).catch((error) => { 
                return { "statut": error.response.status, "message": error.response.statusText }
            });
    },
    


}

const mutations: MutationTree<State> = {
    userLogin(state, user: User) {
        state.connectedUser = true
        console.log(user)
    },
    getAllConcerts(state, concerts: Concert[]) {
        state.concerts = concerts
    },
    getAllCategories(state, categories: Category[]) {
        state.categories = categories
    },
    getAllUsers(state, users: User[]) {
        state.users = users
    },
    addConcert(state, concertForm) {
        concertForm.value.id = state.concerts.length + 1
        console.log("add concert mutation",concertForm);
        state.concerts.push(concertForm.value)
    },
    addCategory(state, categoryForm) {
        categoryForm.value.id = state.categories.length + 1
        console.log("add category mutation",categoryForm);
        state.categories.push(categoryForm.value)
    },
    addUser(state, userForm) {
        userForm.value.id = state.users.length + 1
        console.log("add user mutation",userForm);
        state.users.push(userForm.value)
    },
    deleteConcert(state, id:number) {
        const index = state.concerts.findIndex((concert)=>concert.id===id)
        state.concerts.splice(index,1)
    },
    deleteCategory(state, id:number) {
        const index = state.categories.findIndex((category)=>category.id===id)
        state.categories.splice(index,1)
    },
    deleteUser(state, id:number) {
        const index = state.users.findIndex((user)=>user.id===id)
        state.users.splice(index,1)
    },
    updateConcert(state, concertForm) {
        const index = state.concerts.findIndex((concert)=>concert.id===concertForm.value.id)
        state.concerts[index] = concertForm.value
    },
    updateCategory(state, categoryForm) {
        const index = state.categories.findIndex((category)=>category.id===categoryForm.value.id)
        state.categories[index] = categoryForm.value
    },
    updateUser(state, userForm) {
        const index = state.users.findIndex((user)=>user.id===userForm.value.id)
        state.users[index] = userForm.value
    }


}

export const store: Store<State> = createStore({ state, getters, actions, mutations })
export const key: InjectionKey<Store<State>> = Symbol()
export function useStore() {

    return baseUseStore(key)
}