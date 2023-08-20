import { Component } from "react";
import css from "./App.module.css";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import * as API from "../../services/PixabayApi";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    searchName: "",
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState((state) => ({
      currentPage: state.currentPage + 1,
    }));
  };

  onHandleSubmit = (query) => {
    this.setState({
      searchName: query,
      currentPage: 1,
    });
  };

  addImages = async () => {
    const { searchName, currentPage } = this.state;

    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(searchName, currentPage);
      if (data.hits.length === 0) {
        return toast.info("Sorry image not found...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      const normalizedImages = API.normalizedImages(data.hits);

      this.setState((state) => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: "",
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({
        error: "Something went wrong!",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <div className={css.app}>
        <ToastContainer transition={Slide} />
        <Searchbar onSubmit={this.onHandleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Image gallery is empty...
          </p>
        )}
        {isLoading && <Loader />}

        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <div className={css.button__wrapper}>
            {" "}
            <Button onClick={this.loadMore} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
