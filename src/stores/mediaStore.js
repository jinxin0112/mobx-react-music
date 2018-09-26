import { observable, action, computed } from 'mobx';
import { 
    getSongDetail,
    getSongUrl
} from '../servers/mediaServer';
class mediaStore {
    /* 播放器状态 */
    @observable playing = false;
    /* 歌曲信息 */
    @observable currentSongId = 347230;
    @observable currentSongDetail = null;
    @observable currentSongUrl = '';
    @observable playList = [];

    @action 
    togglePlay = () => {
        this.playing = !this.playing;
    }
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
