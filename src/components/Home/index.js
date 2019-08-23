// == Import : npm
import React from 'react';

// == Import : local
import './home.scss';

// == Composant
const Home = () => {
  return (
    <div className="home">
      <div className="elem-home" >
        <div className="homePage-img" width={7}>
          <img className="home-img" src='/assets/img/do_logo.png' alt='' />
        </div>
        <div className="homePage-text" width={10}>
          <h2 className="home-title" >Dwarven Overlords</h2>
          <h3 className="home-title-two" >Grobbulus NA RP-PVP</h3>
          <p>My kin, the time has come to gather the clans and rise up to reclaim what is rightfully ours in this world. For too long the vile union of greenskins, beastmen, and undead has been allowed to threaten dwarven families, steal our treasures, and destroy our beloved holds. For too long the shamed clan to the south has been permitted to practice the magic of their foul elemental lord, a stain upon our kind. And for too long have we been held back by the men and elves who seek to use our might and our holds for their own, selfish gains.  All of these wrongs have been recorded - every slight against our kind is marked down. The time for patience has ended; no longer can we consign justice to fate while we remain within the depths of our holds.</p>
          <p>It is time to take fate back into our own hands. Gather your arms, your tools, and your fellow clansmen. Prepare to fight back against the misdeeds we've been made to suffer for so long, and unite your clans under the banner of Dwarven Overlords. Together we are as strong as the ages of old. Together we will  put things right, and settle the grudges against those who have done us wrong. For our holds, and for our ancestors, it must be so.</p>
          <p>Should the flaming desire of bringing our kind back where we belong burn within you and your clan, I ask you to seek me out. We look forward to hearing from you, kinsmen.</p>
        </div>
      </div>
    </div> 
  )
}

// == Export
export default Home;
