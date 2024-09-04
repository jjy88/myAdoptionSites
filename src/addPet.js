import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './nav.css';

const AddPet = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <h2>Have a Pet to Give Away</h2>
        <form id="giveAwayForm" action="#" method="POST">
          <label htmlFor="animal">Select animal:</label>
          <select name="animal" id="animal" required defaultValue="">
            <option value="" disabled>Please select an animal</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>

          <label htmlFor="breed">Breed of dog or cat:</label>
          <input type="text" id="breed" name="breed" placeholder="Enter breed, include mix if applicable" required />

          <label htmlFor="age">Age of animal:</label>
          <select name="age" id="age" required defaultValue="">
            <option value="">Any</option>
            <option value="young">Young (0-2 years)</option>
            <option value="adult">Adult (2-7 years)</option>
            <option value="senior">Senior (7+ years)</option>
          </select>

          <label htmlFor="gender">Animal gender:</label>
          <select name="gender" id="gender" required defaultValue="">
            <option value="">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <div className="checkbox-container">
            <input type="checkbox" id="compatibility_dogs" name="compatibility_dogs" />
            <label className="checkbox-label" htmlFor="compatibility_dogs">Gets along with other dogs</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="compatibility_cats" name="compatibility_cats" />
            <label className="checkbox-label" htmlFor="compatibility_cats">Gets along with other cats</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="compatibility_children" name="compatibility_children" />
            <label className="checkbox-label" htmlFor="compatibility_children">Suitable for a family with small children</label>
          </div>

          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" placeholder="Enter comments about the pet" required></textarea>

          <label htmlFor="owner_name">Current owner's name:</label>
          <input type="text" id="owner_name" name="owner_name" placeholder="Enter both family and given name" required />

          <label htmlFor="owner_email">Current owner's email:</label>
          <input type="email" id="owner_email" name="owner_email" placeholder="Enter owner's email" required />

          <input type="submit" value="Submit" />
          <input type="reset" value="Clear" />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddPet;