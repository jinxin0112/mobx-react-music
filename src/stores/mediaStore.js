import { observable, action, computed } from 'mobx';
import * as servers from '../servers/mediaServer';

const {getSongDetail} = servers;
class mediaStore {
    @observable currentSongId = 347230;
    @observable playList = [];

    getSongDetail = ()=> {
        
    }
}

export default new mediaStore()
