import AppWelcome from "./component/AppWelcome";


export default function Home() {
  return (
    <div>
      <h1>Page</h1>
      <AppWelcome headTitle="Big SWU" isShow={true}/>
    </div>
  );
}
