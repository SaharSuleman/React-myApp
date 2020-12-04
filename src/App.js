// import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch';
import Switch2 from './components/Switch2';
import Maths from './components/Maths';
import Maths2 from './components/Maths2';
import Login from './components/Login';
import Hi from './components/Hi';
import Bye from './components/Bye';
import MediaCard from './components/MediaCard';
import imageUrl from '../src/image/aa.jpg';
import Gate from './components/Gate';
import Room from './components/Room';
import Btn from './components/Btn';
import Api from './components/Api';
function App() {
  return (
    <div className="App">
      {/* <Switch />
      <Switch2 />
      <Maths/>
      <Maths2 />
      <Login />
      <Hi name = "sahar" msg = "student" />
      <Bye numi = "to" msg2 = "you" />
      <MediaCard title = "Karachi" body = {(<b>"karachi is love. The three-storey structure houses approximately 40 apartments and around half a dozen shops. Though it is mostly empty, a family still resides on the first floor, while a tailor shop runs on the second floor. The third floor, as the building’s occupants put it, is a no-go zone.

“It is dangerous,” was all one resident would say on the matter. He went on, “We are the chowkidaars [guards] of this building,” insisting that it was in good condition.

But the crumbling facade tells a different tale.

While one resident claimed its doors, windows and balcony fencing were taken away by erstwhile residents around five years ago, a shopkeeper there said that these, made of iron, were dismantled and stolen by drug addicts."</b>) } imageUrl = {imageUrl} />
   <Gate open = {false} />
   <Room />
   <Btn /> */}
   <Api />

    </div>
  );
}

export default App;
