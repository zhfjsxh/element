import axios from 'axios'

export async function getItemList() {
    let result = await axios.get('/data/index').then(d => d.data);
    return result
}