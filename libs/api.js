const staticDataUrl = process.env.NEXT_PUBLIC_STATIC_DATA_URL;
const wpDataUrl = process.env.WORDPRESS_API_URL;

const api = {
    singleTastingMenu: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/menu/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    singleGiftMenu: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/gift/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    singleArturRecognition: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/recognition/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    singleOpening: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/opening/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    singleTeam: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/team/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    singleGallery: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/gallery/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    posts: {
        async getData() {
            const response = await fetch(`${wpDataUrl}wp/v2/posts?limit=100&_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
    singlePost: {
        async getData(id) {
            const response = await fetch(`${wpDataUrl}wp/v2/posts/${id}?_embed`, {
                headers: { 'Cache-Control': 'no-store, max-age=0' },
            });
            const data = await response.json();
            return data;
        },
    },
};

export default api;
