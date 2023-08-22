import css from './Loader.module.css';

import { ColorRing } from 'react-loader-spinner';

function Loader() {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        width="80"
        height="80"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        wrapperClass=""
        wrapperStyle={{}}
        ariaLabel="color-ring-loading"
      />
    </div>
  );
}

export default Loader;
