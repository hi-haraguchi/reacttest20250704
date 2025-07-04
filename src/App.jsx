import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/App.scss';
import Test from './components/Test'
import ButtonBlock from './components/ButtonBlock'
import Textfield001 from './components/Textfield001'
import Multiline001 from './components/Multiline001'
import Button001 from './components/Button001'
import Card001 from './components/Card001';
import Bottomnavigation001 from './components/Bottomnavigation001';
import Appbardrawer from './components/Appbardrawer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Appbardrawer title='entamebottle' />

<Textfield001 label='作品名' />
<Textfield001 label='作者' />
<Textfield001 label='感想の見出し' />
<Multiline001 label='感想' />
<Textfield001 label='タグ（どんな時に振り返る？）' />

<div className="Button001">
  <Button001 ookisa="small" iro="info" text="記録します！" />
{/* primary青 secondary紫 error赤 info青緑 sucess緑 warningオレンジ inherit defaultグレー */}
</div>

<h2>記録したものの一覧</h2>

<div id='card-container'>
  <Card001 title='呪文よ世界を覆せ１' description='感想が表示される予定' isbn='9784065350812'/>
  <Card001 title='ヴィンランドサガ２６' description='感想が表示される予定' isbn='9784065279281'/>
  <Card001 title='税金で買った本９' description='感想が表示される予定' isbn='9784065336380'/>
</div>


<div id="Bottomnavi">
<Bottomnavigation001 label1='記録する' label2='振り返る' label3='ほどよくディグ' />
</div>








{/* 
<h1>aiueo</h1> */}

      {/* <ButtonBlock ookisa="large" iro="success" text="ログイン"/>
      <ButtonBlock title="長野で研究したい人" ookisa="small" iro="error" text="ログアウト"/>
      <Test aa="ちーふおおほり"/>
      <Test aa="きんぱつかのみ"/> 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React リアクトの授業</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
