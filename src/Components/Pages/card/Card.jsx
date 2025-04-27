import { useParams } from "react-router-dom";
import { SrvicesCardsData } from "../../Data/Data";
import { useEffect, useRef, useState } from "react";
import "./Card.css";
import ServiceCard from "../../Includes/ServiceCard/ServiceCard";
import "../../Includes/ServiceCard/ServiceCard.css";
import "../../Layouts/ServicesSec/ServicesSec.css";
import Loader from "../../loader/Loader";

const Card = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState({});
  const [showCards, setShowCards] = useState(4);
  const [loader, setLoader] = useState(false);

  const loaderRef = useRef(null);
  // useEffect(() => {
  //   let scrollLock = false;
  //   let prevScrollY;
  //   const handleScroll = () => {
  //     const currentScrollY = window?.scrollY;
  //     // console.log(currentScrollY)
  //     // console.log(prevScrollY.current)
  //     if (currentScrollY > prevScrollY) {
  //       const containerBottom =
  //         loaderRef?.current?.getBoundingClientRect()?.top;
  //       // console.log(loaderRef?.current?.getBoundingClientRect())
  //       // console.log(window)
  //       const windowHeight = window.innerHeight;
  //       // console.log(windowHeight)
  //       console.log(containerBottom,windowHeight)
  //       if (
  //         containerBottom <= windowHeight &&
  //         !scrollLock &&
  //         showCards < SrvicesCardsData?.length
  //       ) {
  //         scrollLock = true;
  //         setLoader(true);
  //         setTimeout(() => {
  //           setShowCards((prev) => Math.min(prev + 4, SrvicesCardsData?.length));
  //           setLoader(false);
  //           scrollLock = false;
  //         }, 2000);
  //       }
  //     }

  //     prevScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [showCards]);
  useEffect(() => {
    let scrollLock = false;
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        console.log(entry);
        if (entry?.isIntersecting && !scrollLock && showCards < SrvicesCardsData.length ) {
          console.log("Element is visible");
          scrollLock=true
          setLoader(true);
          setTimeout(() => {
            setShowCards((prev) =>
              Math.min(prev + 4, SrvicesCardsData?.length)
            );
            setLoader(false);
            scrollLock=false;
            // scrollLock = false;
          }, 2000);
        } else {
          // console.log("Element is hidden");
        }
      });
    });
    console.log(observer);
    observer.observe(loaderRef.current);

    return(()=>{
      observer.unobserve(loaderRef.current)
    })
  }, []);
  useEffect(() => {
    const service = SrvicesCardsData?.find((item) => item?.id === Number(id));
    setServiceData(service);
  }, [id]);

  return (
    <div className="custom-container cardDetailSec">
      <div className="cardsDetailInner d-flex align-items-center justify-content-between">
        <div className="CardLeftSec">
          <div className="cardDetailSvg">
            {serviceData?.svg}
            <div className="circle rounded-circle"></div>
          </div>
        </div>
        <div className="CardRightSec">
          <h4>{serviceData?.title}</h4>
          <p>{serviceData?.description}</p>
        </div>
      </div>

      <div className="services-section-cards-sec w-100">
        {SrvicesCardsData.slice(0, showCards).map((card) => (
          // {SrvicesCardsData.map((card) => (
          <ServiceCard
            key={card.id}
            id={card?.id}
            svg1={card?.svg}
            title={card?.title}
            desc={card?.description}
            showHover={true}
            showBtn={true}
          />
        ))}

        <div ref={loaderRef} style={{ height: "10px" }}></div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Card;
