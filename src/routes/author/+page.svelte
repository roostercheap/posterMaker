<script lang="ts">
    let imageUrl = '/data/jacob.png';
    let yearBorn = 2000;
    let highschool = "Riverton Highschool";
    let college = "Utah Valley University";
    let email = "jacobbarrus83@gmail.com";
    let degree = "Bachelors in CS";
    let gpa = 3.6;
    let favoriteMovie = "Empire Strikes Back";
    let favoriteSong = "Evenflow by Pearl Jam"
  </script>
  
  <style>
    .profile-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: #7b7b7b;
        text-align: center;
        padding: 20px;
    }
  
    .image-container {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 30px;
        border: 4px solid #fff;
    }
  
    .profile-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  
    .info-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px; /*vertical gap*/
        margin-top: 5px;
        width: 100%;
        max-width: 600px;
        text-align: left;
    }
  
    .info-item {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 1.4;
        align-items: center;
    }
  
    .label {
        font-weight: bold;
        color: #5f5f5f;
        display: inline-block;
        width: 40%;
    }
  
    .value {
        color: #5f5f5f;
    }
  
    .section-title {
        font-size: 2rem;
        margin-bottom: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }
  
    .contact-info {
        margin-top: 40px;
        font-size: 1.1rem;
        color: #7b7b7b;
    }
  </style>
  
  <div class="profile-container">
    <div class="image-container">
      <img src={imageUrl} alt="my Picture" class="profile-image" />
    </div>
  
    <h2 class="section-title">Jacob Barrus</h2>
  
    <div class="info-container">
        <div class="info-item">
            <p class="label">Year Born:</p>
            <p class="value">{yearBorn}</p>
        </div>
        <div class="info-item">
            <p class="label">Highschool:</p>
            <p class="value">{highschool}</p>
        </div>
        <div class="info-item">
            <p class="label">College:</p>
            <p class="value">{college}</p>
        </div>
        <div class="info-item">
            <p class="label">Email:</p>
            <p class="value">{email}</p>
        </div>
        <div class="info-item">
            <p class="label">Degree:</p>
            <p class="value">{degree}</p>
        </div>
        <div class="info-item">
            <p class="label">GPA:</p>
            <p class="value">{gpa}</p>
        </div>
        <div class="info-item">
            <p class="label">Favorite Movie:</p>
            <p class="value">{favoriteMovie}</p>
        </div>
        <div class="info-item">
            <p class="label">Favorite Song:</p>
            <p class="value">{favoriteSong}</p>
        </div>
    </div>
  
    <div class="contact-info">
      <p>Reach out to me at: <a href="mailto:{email}" style="color: #0f7bff;">{email}</a></p>
    </div>
  </div>
  