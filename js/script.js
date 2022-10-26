const { createApp } = Vue;

createApp({
    data: function () {
        return {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            slideIndex: 0,
        }
    },
    methods: {
        slidePrev: function () {
            if (this.slideIndex > 0) {
                this.slideIndex--;
                // this.slideIndex = this.slideIndex - 1;
            } else {                
                this.slideIndex = this.slides.length - 1;
            }
        },

        slideNext: function () {
            if (this.slideIndex < this.slides.length - 1) {
                this.slideIndex++;
                // this.slideIndex = this.slideIndex + 1;
            } else {
                this.slideIndex = 0;
            }

        },
        visualizeImg: function(clickedIndex){
            this.slideIndex = clickedIndex;
        }

    }
}).mount("#app");


