import { useEffect } from "react";
import { notificationList } from "../data";
import { useState } from "react";

function App() {
  const [notiList, setNotiList] = useState([]);
  const [notiLength, setNotiLength] = useState(3);
  useEffect(() => {
    setNotiList(notificationList);
  }, []);

  const markAllRead = () => {
    let newNoti = notiList;

    setNotiList(
      newNoti.map((item) =>
        item.isRead ? item : { ...item, isRead: !item.isRead }
      )
    );
    setNotiLength(0);
  };

  return (
    <>
      <main className="font-jakarta bg-Light-grayish-blue-2 w-full min-h-screen flex items-center justify-center sm:py-16">
        <div className="w-full sm:w-[570px] md:w-[750px] lg:w-[800px] bg-white rounded-lg sm:p-5 px-3 py-5 lg:p-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold">Notifications</h1>
              <div className="py-0.5 px-3 rounded-md font-bold bg-Blue text-white">
                {notiLength}
              </div>
            </div>

            <button
              className="duration-150 hover:text-Blue font-semibold"
              onClick={markAllRead}
            >
              Mark all as read
            </button>
          </div>

          {/* notification list */}
          <div className="flex flex-col gap-2">
            {notiList.map((item) => (
              <div
                className={`rounded-md py-3 px-5 flex gap-5 items-start ${
                  item.isRead ? "bg-white" : "bg-Light-grayish-blue-1"
                }`}
              >
                {/* owner Img */}
                <div>
                  <img src={item.img} alt={item.img} className="w-14" />
                </div>
                {/* rest of the notification */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="leading-[1.3] md:leading-[1] mb-1">
                          <span className="capitalize text-md md:text-lg font-bold custHover inline-block me-1 text-Very-dark-blue">
                            {item.incAccName}
                          </span>
                          <span className="text-Grayish-blue font-semibold me-1">
                            {item.postInfo}
                          </span>
                          {item.postName && (
                            <a
                              href="#"
                              className="custHover text-Dark-grayish-blue font-bold"
                            >
                              {item.postName}
                            </a>
                          )}
                          {item.groupName && (
                            <span className="custHover text-Blue font-extrabold">
                              {item.groupName}
                            </span>
                          )}
                          {!item.isRead && (
                            <div className="ms-2 w-2 h-2 bg-Red rounded-full inline-block">
                              {" "}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="font-semibold text-Dark-grayish-blue">
                        {item.postTime}
                      </div>
                    </div>
                    {/* post image */}
                    {item.postImg && (
                      <div>
                        <img
                          src={item.postImg}
                          alt={item.postImg}
                          className="w-12 rounded-md hover:border-4 hover:border-Blue cursor-pointer duration-150"
                        />
                      </div>
                    )}
                  </div>
                  {/* another post */}
                  {item.message && (
                    <div className="me-3 mt-3 py-4 px-6 border border-Grayish-blue box-border rounded-md font-semibold text-Dark-grayish-blue hover:bg-Light-grayish-blue-1 cursor-pointer duration-150">
                      {item.message}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
