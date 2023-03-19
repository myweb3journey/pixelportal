// react:
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiCloud, BiMusic, BiPlus } from "react-icons/bi";
import toast, {Toaster} from "react-hot-toast";

// components
import Navbar from "../components/Navbar";

// ipfs:
import { create } from "ipfs-http-client";

// contract:
import getContract from "../utils/getContract";

// buffer:
import { Buffer } from 'buffer';

const CreateCollectible = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [isAudio, setIsAudio] = useState(false);

  const projectId = "2DeN44Dzw6eHRnjsoOHqcTbHdjC";
  const projectSecret = "c6c6e9c248cd2e7264cca2d991110a15";

  const auth =
      'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  const client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
          authorization: auth,
      },
    });

  const thumbnailRef = useRef();
  const videoRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const address = localStorage.getItem("walletAddress");
    if (address && address.startsWith("0x000000000000")) {
      console.log('connect your wallet to continue');
      navigate("/");
    }
  });


  const handleSubmit = async () => {
    if (
      title === "" ||
      description === "" ||
      category === "" ||
      location === "" ||
      thumbnail === "" ||
      video === ""
    ) {
      toast.error("Please fill in all of the fields before submitting!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    uploadThumbnail(thumbnail);
  };

  const uploadThumbnail = async (thumbnail) => {
    toast("Uploading thumbnail...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    console.log("uploading thumbnail");
    try {
      const added = await client.add(thumbnail);
      uploadVideo(added.path);
      toast.success("Thumbnail uploaded successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const uploadVideo = async (thumbnail) => {
    console.log("uploading video");
    toast("Uploading video...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    try {
      const added = await client.add(video);
      console.log({
        uploadVIdeo: added.path,
        thumbnail: thumbnail,
      });
      await saveVideo(added.path, thumbnail);
      toast.success("Video uploaded successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      goBack();
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const saveVideo = async (video, thumbnail) => {
    let data = {
      title,
      description,
      category,
      location,
      thumbnail,
      video,
    };
    console.log("Saving video", data);
    let contract = await getContract();
    let UploadedDate = String(new Date());

    console.log("UploadedDate", UploadedDate);

    // Show successfully alert
    await contract.uploadVideo(
      video,
      title,
      description,
      location,
      category,
      thumbnail,
      UploadedDate
    );
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <> 
    <div className="h-screen bg-black">
      <div className="px-10 flex flex-col w-full items-center justify-center mx-auto">

        {/* Videos */}
        <div className="py-8 flex h-4/5 w-full rounded-md">
          <div className="flex space-x-5 w-full h-full items-center justify-center mx-auto">
            
            {/* Upload section */}
            <div className="flex h-full w-5/6 rounded-md">
            <p className="text-left font-semibold mb-5 text-4xl text-white">Create <br></br>Collection</p>

              <div className="w-full h-full flex flex-row">
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col m-10 mt-0  lg:flex-row">
                    <div className="flex lg:w-3/4 flex-col ">
                      <label className="text-white  dark:text-[#9CA3AF]  text-sm">
                        Title of your upload
                      </label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                        className="w-[90%] text-black   dark:placeholder:text-black  rounded-md mt-2 h-12 p-2 border border-black bg-white dark:bg-backgroundBlack dark:border-[#444752] focus:outline-none"
                      />
                      <label className="text-left text-white dark:text-[#9CA3AF] mt-10 text-sm">
                        Description
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Never Gonna Give You Up was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody."
                        className="w-[90%] text-black  dark:placeholder:text-black  rounded-md mt-2  h-32 p-2 border border-black bg-white dark:bg-backgroundBlack dark:border-[#444752] focus:outline-none"
                      />

                      <div className="flex flex-row mt-10 w-[90%]  justify-between">
                        <div className="flex flex-col w-2/5	">
                          <label className="text-left text-white dark:text-[#9CA3AF]  text-sm">
                            Location
                          </label>
                          <input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            type="text"
                            placeholder="Bali - Indonesia"
                            className="rounded-md text-black  mt-2 dark:placeholder:text-black   h-12 p-2 border border-black bg-white dark:bg-backgroundBlack dark:border-[#444752] focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-col w-2/5	">
                          <label className="text-white dark:text-[#9CA3AF]  text-sm">
                            Category
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-left rounded-md text-white  mt-2  h-12 p-2 dark:border-gray-600 border border-black bg-white dark:bg-backgroundBlack dark:text-[#9CA3AF] focus:outline-none"
                          >
                            <option>Music</option>
                            <option>Sports</option>
                            <option>Gaming</option>
                            <option>News</option>
                            <option>Entertainment</option>
                            <option>Education</option>
                            <option>Science & Technology</option>
                            <option>Travel</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <label className="text-white dark:text-[#9CA3AF]  mt-10 text-sm">
                        Thumbnail
                      </label>
                      <div
                        onClick={() => {
                          thumbnailRef.current.click();
                        }}
                        className="border-2 w-64 dark:border-gray-600  border-dashed border-green-400 rounded-md mt-2 p-2  h-36 items-center justify-center flex"
                      >
                        {thumbnail ? (
                          <img
                            onClick={() => {
                              thumbnailRef.current.click();
                            }}
                            src={URL.createObjectURL(thumbnail)}
                            alt="thumbnail"
                            className="text-left h-full rounded-md"
                          />
                        ) : (
                          <BiPlus size={40} color="gray" />
                        )}
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        ref={thumbnailRef}
                        onChange={(e) => {
                          setThumbnail(e.target.files[0]);
                        }}
                      />
                    </div>
                    <div
                      onClick={() => {
                        videoRef.current.click();
                      }}
                      className={
                        video
                          ? "w-96 rounded-md  h-64 items-center justify-center flex"
                          : "border-2 dark:border-gray-600  w-96 border-dashed border-green-400 rounded-md mt-8   h-64 items-center justify-center flex"
                      }
                    >
                      {video ? (
                        <>
                          {isAudio ? (
                            <audio
                              src={URL.createObjectURL(video)}
                              controls
                              className="w-full h-full"
                            />
                          ) : (
                            <video
                              controls
                              src={URL.createObjectURL(video)}
                              className="h-full rounded-md"
                            />
                          )}
                        </>
                      ) : (
                        <p className="text-white dark:text-[#9CA3AF]">
                          Upload {isAudio ? "Audio" : "Video"}
                        </p>
                      )}
                    </div>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    ref={videoRef}
                    accept={isAudio ? "audio/*" : "video/*"}
                    onChange={(e) => {
                      setVideo(e.target.files[0]);
                      console.log(e.target.files[0]);
                    }}
                  />
                <div className="mt-0 mx-10 flex justify-start">
                    <div className="flex items-center">
                      <button
                        className="bg-red-100 shadow-md text-red-600 font-semibold py-2 px-6 border rounded-lg  border-red-500 mr-6"
                        onClick={() => {
                          goBack();
                        }}
                      >
                        Discard
                      </button>
                      <button
                        onClick={() => {
                          handleSubmit();
                        }}
                        className="bg-black text-white  font-semibold shadow-lg py-2 rounded-lg flex px-4 justify-between flex-row items-center"
                      >
                        <BiCloud />
                        <p className="ml-2">Upload</p>
                      </button>
                    </div>
                  </div>
                </div>
                <Toaster></Toaster>
              </div>  
            </div>
            {/* End of upload div */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateCollectible
