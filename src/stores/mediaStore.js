import { observable, action, computed } from 'mobx';
import { 
    getSongDetail,
    getSongUrl
} from '../servers/mediaServer';
class mediaStore {
    @observable currentSongId = 347230;
    @observable currentSongDetail = null;
    @observable currentSongUrl = '';
    @observable playList = [];
    @action
    getSongDetail = async () => {
        const detail = await getSongDetail(this.currentSongId);
        this.currentSongDetail = detail;
    }
    @action
    getSongUrl = async () => {
        const url = await getSongUrl(this.currentSongId);
        this.currentSongUrl = url.data[0].url;        
    }
}

export default new mediaStore()
