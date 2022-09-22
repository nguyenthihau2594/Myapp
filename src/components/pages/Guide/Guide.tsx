import Button from '../../Layout/Button/Button';
import Input from '../../Layout/Input/Input';
import LangSelect from '../../Layout/LangSelect/LangSelect';
import Myinfo from '../../Layout/Myinfo/Myinfo';
import LNBMenu from '../../Layout/LNBMenu/LNBMenu';
import KVMain from '../../Layout/KVMain/KVMain';
import Game from '../../Layout/Game/Game';
import Newlist from '../../Layout/NewList/Newlist';
import Bestlist from '../../Layout/Bestlist/Bestlist';

import s from './Guide.module.scss';
import data from '../../Layout/NewList/DataNewlist.json';
import Bestdata from '../../Layout/Bestlist/DataBestlist.json';


function Guide() {
  return (
    <div className={s.guide}>
      <h1 className={s.heading__h1}>Components Style</h1>
      <div className={s.guide__wrap}>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>Button</h2>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Primary Button</h3>
            <Button kind="primary" as="button">자세히 보기</Button>
            <Button kind="primary" as="button" disable={true}  style={{marginLeft: '20px'}}  >자세히 보기</Button>
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Primary Disable Button full width</h3>
            <Button kind="primary" as="button" isFullWidth={true} >자세히 보기</Button>
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Primary White Button</h3>
            <Button kind="primary__white" as="button" >자세히 보기</Button>
            <Button kind="primary__white" as="button"  disable={true} style={{marginLeft: '20px'}} >자세히 보기</Button>
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Secondary Button</h3>
            <Button kind="secondary" as="button" >로그인</Button>
            <Button kind="secondary" as="button" disable={true} style={{marginLeft: '20px'}}>로그인</Button>
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Tertiary Button</h3>
            <Button kind="tertiary" as="button"  >모두보기</Button>
            <Button kind="tertiary" as="button" disable={true} style={{marginLeft: '20px'}}>모두보기</Button>
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Text Link Button</h3>
            <Button kind="textlink" as="a" link='/' >텍스트 링크 버튼</Button>
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>Input text</h2>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Text Field Type1</h3>
            <Input kind="type1" error='Error Text' placeholder='Text' />
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Text Field Type2</h3>
            <Input kind="type2" error='Error Text' placeholder='Text' />
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Text Field Type3</h3>
            <Input kind="type3" label='Index' error='Error Text' />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>Language</h2>
          <div className={s.guide__area}>
            <LangSelect />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>My info</h2>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Login</h3>
            <Myinfo isLogin={false} />
            <h3 className={s.heading__h3} style={{marginTop: "30px"}}>Not Login</h3>
            <Myinfo isLogin={true} name="어둠의 냥크니스" level={15} />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>LNB menu</h2>
          <div className={s.guide__area}>
            <LNBMenu />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>KV Banner</h2>
          <div className={s.guide__area}>
            <KVMain />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>Game</h2>
          <div className={s.guide__area}>
            <Game />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>News</h2>
          <div className={s.guide__area}>
            <Newlist news={data} />
          </div>
        </div>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>Best</h2>
          <div className={s.guide__area}>
            <Bestlist best={Bestdata} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
