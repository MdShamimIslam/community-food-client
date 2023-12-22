import React from 'react';

const ModalFood = ({food}) => {
    const {
        _id,
        donator_img,
        donator_name,
        donator_email,
        quantity,
        expired_date,
        location,
        food_name,
        food_img,
      } = food;
    return (
        <div>
            <dialog id="request-modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">{food_name}</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
    );
};

export default ModalFood;