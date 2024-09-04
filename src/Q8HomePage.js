import React from 'react';
import './nav.css';
import './Q8TimeFunction.js';
import './formValidation.js';

const AddPet = () => {
    return (
        <div>
            <header>
                <div className="container header">
                    <a href="Q8HomePage.html">
                        <img src="https://www.catster.com/wp-content/uploads/2023/11/Dog-and-cat-with-together-in-bed-AJR_photo-Shutterstock-e1668494842955.jpg"
                            alt="Adopt A-Cat/Dog Logo" />
                    </a>
                    <h1>Adopt Cat/Dog</h1>
                    <p>Website for adopting a cat or dog in your local area.</p>
                    <p>Current Time: <span id="dateTimeDisplay"></span></p>
                </div>
            </header>
            <nav>
                <ul>
                    <li><a href="/Q8HomePage">Home</a></li>
                    <li><a href="/Q8FindCatDogPage">Find a dog/cat</a></li>
                    <li><a href="/Q8DogCarePage">Dog and Cat Care</a></li>
                    <li><a href="/addPet">Register Your Pet</a></li>
                    <li><a href="/register">Create an Account</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
            <main>
                <h2>Have a Pet to Give Away</h2>
                <form id="giveAwayForm" action="#" method="POST">
                    <label htmlFor="animal">Select animal:</label>
                    <select name="animal" id="animal" required>
                        <option value="" disabled selected>Please select an animal</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                    <label htmlFor="breed">Breed of dog or cat:</label>
                    <input type="text" id="breed" name="breed" placeholder="Enter breed, include mix if applicable" required />
                    <label htmlFor="age">Age of animal:</label>
                    <select name="age" id="age" required>
                        <option value="" selected>Any</option>
                        <option value="young">Young (0-2 years)</option>
                        <option value="adult">Adult (2-7 years)</option>
                        <option value="senior">Senior (7+ years)</option>
                    </select>
                    <label htmlFor="gender">Animal gender:</label>
                    <select name="gender" id="gender" required>
                        <option value="" selected>Any</option>
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
            <footer>
                <a href="Q8PrivacyPage.html">Privacy/Disclaimer Statement</a>
            </footer>
        </div>
    );
};

export default AddPet;