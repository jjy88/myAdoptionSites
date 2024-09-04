import React, { useState } from 'react';

function PetCarePage() {
  const [selectedPet, setSelectedPet] = useState('dog'); 

  return (
    <main>
      <h2>Pet Care</h2>
      <div>
        <button onClick={() => setSelectedPet('dog')}>Dog Care</button>
        <button onClick={() => setSelectedPet('cat')}>Cat Care</button>
      </div>

      {selectedPet === 'dog' && (
        <section>
          <h3>Dog Care</h3>
          <p>Here are some tips for taking care of your dog.</p>
          <h3>General Pet Information</h3>
          <p>Record each pet’s name, breed, size, and temperament. Include any registration numbers if applicable.</p>
          <h3>Veterinarian Information</h3>
          <p>Keep your veterinarian’s contact information easily accessible in case of emergencies. Also, list anyone authorized to make medical decisions for your pet.</p>
          <h3>Medication and Health</h3>
          <p>Detail any medications your dog is taking, including dosages and schedules. Include information on flea and tick control and any other preventative treatments.</p>
          <h3>Feeding Instructions</h3>
          <p>Specify the type and amount of food your dog requires, feeding times, and any dietary restrictions.</p>
          <h3>Daily Routine</h3>
          <p>Outline the daily routine including walks, exercise requirements, and any special needs your dog might have.</p>
          <h3>Behavioral Information</h3>
          <p>Include notes on how your dog interacts with other animals or strangers, any fears or behavioral quirks.</p>
        </section>
      )}

      {selectedPet === 'cat' && (
        <section>
          <h3>Cat Care</h3>
          <p>Here are some tips for taking care of your cat.</p>
          <h3>General Pet Information</h3>
          <p>Record each pet’s name, breed, size, and temperament. Include any registration numbers if applicable.</p>
          <h3>Veterinarian Information</h3>
          <p>Keep your veterinarian’s contact information easily accessible in case of emergencies. Also, list anyone authorized to make medical decisions for your pet.</p>
          <h3>Medication and Health</h3>
          <p>Detail any medications your cat is taking, including dosages and schedules. Include information on flea and tick control and any other preventative treatments.</p>
          <h3>Feeding Instructions</h3>
          <p>Specify the type and amount of food your cat requires, feeding times, and any dietary restrictions.</p>
          <h3>Daily Routine</h3>
          <p>Outline the daily routine including playtime, exercise requirements, and any special needs your cat might have.</p>
          <h3>Behavioral Information</h3>
          <p>Include notes on how your cat interacts with other animals or strangers, any fears or behavioral quirks.</p>
        </section>
      )}
    </main>
  );
}

export default PetCarePage;