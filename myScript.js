
const app = new Vue({

    el: '#MainAlbum',
    data: {
        AlbumsList: [],
    },

    methods: {

        StampaAlbum: function(){

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response1)=>{
                this.AlbumsList = response1.data.response
            });
            
        }
    }
})