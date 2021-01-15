import { getSnapshot } from "mobx-state-tree";

import { initializeStore } from "../store";

export default function Ssg() {
  return <div></div>;
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  const store = initializeStore();

  store.update();

  return { props: { initialState: getSnapshot(store) } };
}
