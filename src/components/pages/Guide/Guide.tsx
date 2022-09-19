import Button from '../../Layout/Button/Button';
import Input from '../../Layout/Input/Input';
import s from './Guide.module.scss';

function Guide() {
  return (
    <div className={s.guide}>
      <h1 className={s.heading__h1}>Components Style</h1>
      <div className={s.guide__wrap}>
        <div className={s.guide__section}>
          <h2 className={s.heading__h2}>Button</h2>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Primary Button</h3>
            <Button kind="primary" as="button" >자세히 보기</Button>
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
            <Input kind='type1' label='Text'  />
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Text Field Type2</h3>
          </div>
          <div className={s.guide__area}>
            <h3 className={s.heading__h3}>Text Field Area</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
