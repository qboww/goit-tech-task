import React from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import css from "./CardModal.module.css";

Modal.setAppElement("#root");

const CardModal = ({ car, isOpen, closeModal }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories = [],
    functionalities = [],
    description,
    mileage,
    rentalConditions = [],
    engineSize,
    fuelConsumption,
  } = car;

  const sliceCity = (address) => address.split(", ")[1];
  const sliceCountry = (address) => address.split(", ")[2];

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{ overlay: { zIndex: 1000 } }}
    >
      <IoClose className={css.icon} onClick={closeModal} size={24} />
      <div className={css.thumb}>
        <img src={img} alt={`${make} ${model}`} />
      </div>
      <div className={css.content_wrapper}>
        <div>
          <div className={css.title_wrapper}>
            <h3 className={css.title}>
              {make} <span className={css.accent}>{model}</span>, {year}
            </h3>
          </div>
          <ul className={css.list}>
            <li className={css.item}>{sliceCity(address)}</li>
            <li className={css.item}>{sliceCountry(address)}</li>
            <li className={css.item}>Year: {year}</li>
            <li className={css.item}>Type: {type}</li>
            <li className={css.item}>Fuel Consumption: {fuelConsumption}</li>
            <li className={css.item}>Engine Size: {engineSize}</li>
          </ul>
          <p className={css.description}>{description}</p>
        </div>
        <div>
          <h4 className={css.sub_heading}>Accessories and functionalities:</h4>
          <ul className={css.accessories_list}>
            {accessories.map((accessory, index) => (
              <li key={index} className={css.item}>
                {accessory}
              </li>
            ))}
            {functionalities.map((functionality, index) => (
              <li key={index} className={css.item}>
                {functionality}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={css.sub_heading}>Rental Conditions:</h4>
          <ul className={css.conditions_list}>
            {Array.isArray(rentalConditions) &&
              rentalConditions.map((condition, index) => (
                <li key={index} className={css.conditions_item}>
                  {condition}
                </li>
              ))}
            <li className={css.conditions_item}>
              Mileage:{" "}
              <span className={css.tag_accent}>{mileage.toLocaleString()}</span>
            </li>
            <li className={css.conditions_item}>
              Price:{" "}
              <span className={css.tag_accent}>{`${rentalPrice.slice(
                1
              )}$`}</span>
            </li>
          </ul>
        </div>
        <a className={css.button} href="tel:+380730000000">
          Rental car
        </a>
      </div>
    </Modal>
  );
};

export default CardModal;
