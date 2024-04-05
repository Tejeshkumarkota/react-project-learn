import React from "react";

export default function HowToTransform() {
  return (
    <>
      <section
        className="partner bg-grey pt-5 position-relative how-work"
        id="how-work"
      >
        <p className="tag"> How to Transform? </p>
        <div className="container py-3">
          <div className="partner-slide row pt-3">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
              <span className="ioc-learn" />
              <h5 className="font-weight-bolder my-2 font-28">Educate</h5>
              <p className="font-16">
                Understand the pressing issues and learn our process of
                providing help
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
              <span className="ioc-volunteer" />
              <h5 className="font-weight-bolder my-2 font-28">Step Forward</h5>
              <p className="font-16">
                Check our upcoming events and share your part to the community
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
              <span className="ioc-share" />
              <h5 className="font-weight-bolder my-2 font-28">Share</h5>
              <p className="font-16">
                Create a social awareness by sharing this initiative with people
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
              <span className="ioc-donation" />
              <h5 className="font-weight-bolder my-2 font-28">Contribute</h5>
              <p className="font-16 mb-0">Give a Bit. Transform a Lot</p>
              <p className="font-16">
                Help us raise money for this initiative to create a larger
                impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
