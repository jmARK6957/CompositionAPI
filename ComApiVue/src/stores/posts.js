import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
 // data actions and getters would go here
 state() {
    return {
        posts: [],
        loading: true,
        errorMessage: ''
    }
},

// computed properties
getters: {
    sorted() {
        return this.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    save: (state) => {
        return state.posts.filter((p) => p.saved).sort((a, b) => new Date(b.date) - new Date(a.date))
    }
},
// Methods
actions: {
    getPosts() {
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
            this.posts = data
            this.loading = false
        }).catch(error => {
            this.errorMessage = 'Something went wrong!'
            this.loading = false
            console.log(error)
        })
    },

    addPost(post) {
        const newPost = {
            id: this.posts.length + 1,
            title: post.title,
            body: post.body,
            name: 'John Mark Logroño',
            date: new Date().toLocaleDateString(),
            saved: false
        }
        this.posts.push(newPost)

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }).catch(error => console.log(error))
    },
    // delete a post method
    deletePost(id) {
        this.posts = this.posts.filter((p) => p.id !== id)
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
        }).catch(error => console.log(error))
    },
    savedPost(id) {
        const post = this.posts.find((p) => p.id === id)
        post.saved = !post.saved

            fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ saved: post.saved })
        }).catch(error => console.log(error))
    }
}
})
