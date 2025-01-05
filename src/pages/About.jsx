import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slide from "../UI/Slide";

function About() {
  return (
    <div className="service__section">
      <div className="service__top--section">
        <div className="service__page--title">
          <h1>Our Services</h1>
        </div>
        <Slide />
      </div>
      <div className="service__bottom--section">
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Lawn Care and Mowing</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Mowing:</strong> Regular trimming of grass to maintain a
                healthy height.
              </li>
              <li>
                <strong>Edging:</strong> Creating clean borders along sidewalks,
                driveways, and garden beds.
              </li>
              <li>
                <strong>Trimming:</strong> Cutting grass in hard-to-reach areas.
              </li>
              <li>
                <strong>Aeration:</strong> Punching holes in the lawn to improve
                soil aeration and root growth.
              </li>
              <li>
                <strong>Thatching:</strong> Removing layers of dead grass to
                prevent buildup and improve airflow.
              </li>
              <li>
                <strong>Overseeding:</strong> Spreading new grass seeds to
                thicken the lawn.
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Fertilization and Soil Care</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Soil Testing:</strong> Assessing pH levels and nutrient
                content.
              </li>
              <li>
                <strong>Fertilization:</strong> Applying balanced nutrients at
                optimal times.
              </li>
              <li>
                <strong>Lime Treatment:</strong> Correcting soil acidity for
                healthy grass growth.
              </li>
              <li>
                <strong>Topdressing:</strong> Adding a layer of compost or soil
                for nourishment.
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Weed and Pest Control</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Weed Removal:</strong> Manual or chemical removal of
                invasive plants.
              </li>
              <li>
                <strong>Herbicide Application:</strong> Treating lawns with
                pre-emergent and post-emergent herbicides.
              </li>
              <li>
                <strong>Pest Management:</strong> Using safe treatments to
                eliminate pests like grubs or moles.
              </li>
              <li>
                <strong>Disease Control:</strong> Identifying and treating
                fungal infections or diseases.
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Irrigation and Watering</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Sprinkler Installation/Repair:</strong> Ensuring an
                efficient irrigation system.
              </li>
              <li>
                <strong>Water Management:</strong> Setting proper schedules to
                prevent over/underwatering.
              </li>
              <li>
                <strong>Drought Preparation:</strong> Adjusting techniques
                during dry seasons.
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Seasonal Maintenance</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Spring Cleanup:</strong> Removing debris, dead leaves,
                and prepping for growth.
              </li>
              <li>
                <strong>Fall Cleanup:</strong> Collecting leaves, branches, and
                winterizing the lawn.
              </li>
              <li>
                <strong>Snow Removal:</strong> Clearing snow from pathways and
                lawn areas.
              </li>
              <li>
                <strong>Winterization:</strong> Preparing the lawn and equipment
                for cold weather.
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">
            Landscaping and Aesthetic Enhancements
          </h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Mulching:</strong> Adding mulch to flower beds and trees
                for aesthetics and moisture retention.
              </li>
              <li>
                <strong>Hardscaping: </strong>Installing features like paths,
                edging, or decorative stones.
              </li>
              <li>
                <strong>Flower Bed Maintenance:</strong> Planting and
                maintaining garden areas.
              </li>
              <li>
                <strong>Tree and Shrub Care:</strong> Pruning, trimming, and
                fertilizing shrubs and small trees.
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Pressure Washing</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Exterior Surfaces:</strong>House Sidings, Driveways,
                Walkways, Decks, Patios and Fences.
              </li>
              <li>
                <strong>Roof and Gutter Cleaning</strong>
              </li>
              <li>
                <strong>Outdoor Features and Accessories:</strong>Outdoor
                Furniture, Garages and Sheds and Playgrounds
              </li>
            </ul>
          </div>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Holiday Decorations</h2>
          <div className="service__list">
            <ul>
              <li>
                <strong>Christmas Lights</strong>
              </li>
              <li>
                <strong>Outdoor Decorations for Holidays</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
