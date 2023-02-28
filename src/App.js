import Info from "./Info";
import List from "./List";
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <div>
        <span id="full-text" className='opacity-0'>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span>
        <span id="short-text" className='opacity-0'>++++++++++++++++++++++++++++++++++++++++++++++++++++++</span>
        <span id="shorter-text" className='opacity-0'>++++++++++++++++++++++++++++++++++</span>
        <span id="shortest-text" className='opacity-0'>++++++++++++++++++++++++++++</span>
        <span id="smallest-text" className='opacity-0'>+++++++++++++++++++++++</span>
      </div>
      <div className="mb-8">
        <Info 
        avatar = {data.avatar}
        uname = {data.uname}
        name = {data.name}
        />
      </div>
      <div className="w-full">
        <List links={data.links}/>
      </div>
      <div className="flex mt-8 w-full justify-center items-center" id="footer">
        <span className="justify-center text-2xl font-semibold text-white">LinkUp</span>
      </div>
      <div>
        <span className='opacity-0'>+++++++++++++++++++++++</span>
      </div>
    </div>
  );
}

export default App;
