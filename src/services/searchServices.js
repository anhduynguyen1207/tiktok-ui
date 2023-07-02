import * as request from '~/utils/request';


//cách viết rút gọn
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const suggested = async (q = 'a', type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const following = async (q = 't', type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

 //cách viết thông thường
        // request.get('users/search', {
        //     params: {
        //         q: debounced,
        //         type: 'less',
        //     }
        // })
        //     .then(res => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     })