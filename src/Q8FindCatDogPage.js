import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './nav.css';

const FindPetPage = () => {
return (
<div>
  <Header />
  <Navbar />
  <main>
    <h2>Find a Dog/Cat</h2>
    <form id="findPetForm" action="/Q8FindCatDogPage" method="GET">
      <fieldset>
        <legend>Select Animal</legend>
        <label htmlFor="animal">Animal:</label>
        <select name="animal" id="animal" required>
          <option value="">Please select an animal</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="doesnt_matter">Doesn't Matter</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Details</legend>
        <label htmlFor="breed">Breed:</label>
        <select name="breed" id="breed" required>
          <option value="">Any breed</option>
          <option value="NatureSystem">Nature System (Dog)</option>
          <option value="DogShowSystem">Dog Show System (Dog)</option>
          <option value="DevonRex">Devon Rex (Cat)</option>
          <option value="CornishRex">Cornish Rex (Cat)</option>
        </select>
        <label htmlFor="age">Age:</label>
        <select name="age" id="age" required>
          <option value="">Any age</option>
          <option value="young">Young (0-2 years)</option>
          <option value="adult">Adult (2-7 years)</option>
          <option value="senior">Senior (7+ years)</option>
          <option value="doesnt_matter">Doesn't Matter</option>
        </select>
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender" required>
          <option value="">Any gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="doesnt_matter">Doesn't Matter</option>
        </select>
      </fieldset>
      
      <button type="submit" className="btn btn-primary">Search</button>
      <button type="reset" className="btn btn-secondary">Clear</button>
    </form>
  </main>
  <Footer />
</div>
);
};

export default FindPetPage;