import { useEffect, useState } from 'react';
import './home.scss';
import { likes } from '../global/atom';
import { useRecoilState } from 'recoil';

const Home = () => {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState('red');
  let [name, setName] = useState('John');
  let [country, setCountry] = useState('Nigeria');
  let [love, setLove] = useRecoilState(likes);

  function add(){
    count ++;
    setCount(count);
  }
  function subt(){
    count --;
    setCount(count);
  }
  useEffect(()=>{
    setCount(count = count + 1);
  },[color])
  return (
    <section className='home'>
      <h1>Goals: {count}</h1>
      <button onClick={()=> add()}>Add Goal</button>
      <button onClick={()=> subt()}>remove Goal</button>


      <div className="names">
        <p>{name} is a developer from {country}</p>
        <button onClick={()=> setName('James')}>change name</button>
        <button onClick={()=> setCountry('Ghana')}>change name</button>
      </div>

      <div className={color}>
        <h1>Change background colors</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, animi tempore asperiores vitae sed vel soluta nostrum exercitationem odit assumenda sint officia repudiandae laudantium illum aut architecto minima possimus veniam minus aliquam cum cupiditate deserunt ratione. Maiores dicta itaque libero veniam doloribus est saepe. Tenetur similique, iusto pariatur dolorum maiores provident veniam dolores aperiam earum fugit. Eaque nemo, aut iusto deleniti, aliquid magnam vel a molestiae modi pariatur sed distinctio, architecto qui explicabo veritatis repellendus obcaecati assumenda excepturi commodi? Perspiciatis, dolores. Eveniet, veniam assumenda. Aspernatur ab, vel aliquam esse similique error dolores, quidem expedita aperiam sit minima recusandae accusantium magnam.</p>
        <button className='rd' onClick={()=> setColor('red')}>red</button>
        <button className='bl' onClick={()=> setColor('blue')}>blue</button>
        <button className='gr' onClick={()=> setColor('green')}>green</button>
        <button className='yl' onClick={()=> setColor('yellow')}>yellow</button>
      </div>

      <div className="loves">
        <h2>love: {love}</h2>
        <button onClick={()=> setLove(love=love + 1)}>like now</button>
      </div>
    </section>
  )
}

export default Home