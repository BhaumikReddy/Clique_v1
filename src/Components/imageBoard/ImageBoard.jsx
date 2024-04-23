import { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";

const ImageBoard = ({ query }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const getPhotos = async () => {
    const res = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&page=${page}`,
      {
        headers: {
          Authorization:
            "i5APzibKEg8kSrqiPxrT3sEMjBKQnlmH0zYodm545kOleiizMvpHLFCU",
        },
      }
    );
    setData(res?.data);
    setPage((prev) => prev + 1);
  };

  const getNextPhotos = async () => {
    const res = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&page=${page}`,
      {
        headers: {
          Authorization:
            "i5APzibKEg8kSrqiPxrT3sEMjBKQnlmH0zYodm545kOleiizMvpHLFCU",
        },
      }
    );
    setData({
      ...data,
      photos: [...data?.photos, ...res?.data?.photos],
    });
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setPage(1);
    setData(null);
    getPhotos();
  }, [query]);

  console.log(data);

  const handleId = () => {
    // const randomNumber = Math.floor(Math.random() * (3000000 - 2777777 + 1) ) + 27777777

  }

  return (
    <div className="imageBoard">
      <div className="heading">
        Explore <span>Images</span>
      </div>
      {data?.photos?.length > 0 && (
        <InfiniteScroll
          className="images"
          dataLength={data?.photos?.length}
          hasMore={page <= data?.total_results / data?.per_page}
          next={getNextPhotos}
          // loader={
          //   <ClipLoader
          //     size={150}
          //     aria-label="Loading Spinner"
          //     data-testid="loader"
          //   />
          // }
        >
          {data?.photos?.map((photo, id) => (
            <div className="image" key={id}>
              <img src={photo?.src?.landscape} className="w-full" />
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ImageBoard;
