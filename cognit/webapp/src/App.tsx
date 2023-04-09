// import { Notecard } from "./features/notecard/Notecard";
import { Notelist } from "./features/notelist/Notelist";
import "./App.css";

function App() {
  return (
    <Notelist
      cards={[
        { id: 1, title: "Hello, world!" },
        {
          id: 2,
          title: "Hello, world!",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan iaculis enim et ornare. Suspendisse malesuada eleifend eros, a placerat dolor pulvinar eu. Pellentesque finibus vehicula tortor, sit amet malesuada...",
        },
        {
          id: 3,
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan iaculis enim et ornare. Suspendisse malesuada eleifend eros, a placerat dolor pulvinar eu. Pellentesque finibus vehicula tortor, sit amet malesuada justo feugiat a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a velit nulla. Duis cursus felis eu magna sollicitudin, sed facilisis nunc consequat. Nulla viverra nibh lacus, ac pharetra tellus pellentesque a. Vestibulum aliquam ac nulla scelerisque sollicitudin. Quisque sed libero magna...",
        },
      ]}
    />
  );
}

export default App;
