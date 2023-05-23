const { MongoClient } = require('mongodb');

async function addFakeData() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('bookstore');
    const collection = db.collection('books');
    const fakeData = [
      {
        title: 'GAME OF THRONES',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/574/9780007428540.jpg',
        author: 'GEORGE R R MARTIN',
        price: 200,
        rating: 5,
      },
      {
        title: 'NIGHT SCHOOL (JACK REACHER, #21)',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/668/9780857502704.jpg',
        author: 'LEE CHILD',
        price: 299,
        rating: 4,
      },
      {
        title: 'HARRY POTTER AND THE CHAMBER OF SECRETS',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/569/9780747538486.jpg',
        author: 'J. K. ROWLING',
        price: 190,
        rating: 3,
      },
      {
        title: 'THE KITE RUNNER',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/568/9780747566533.jpg',
        author: 'KHALED HOSSEINI',
        price: 220,
        rating: 2,
      },
      {
        title: 'THE HARD WAY',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9780553815870.jpg',
        author: 'LEE CHILD',
        price: 139,
        rating: 5,
      },
      {
        title: 'FIFTY SHADES OF GREY',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/568/9780099579939.jpg',
        author: 'E L JAMES',
        price: 526,
        rating: 5,
      },
      {
        title: "SAVED : A WAR REPORTER'S MISSION TO MAKE IT HOME",
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9780063309661.jpg',
        author: 'BENJAMIN HALL',
        price: 879,
        rating: 5,
      },
      {
        title: 'SHERLOCK HOLMES: THE COMPLETE NOVELS',
        imgUrl:
          'https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9780143455264_16583773140.jpg',
        author: 'CONAN DOYLE',
        price: 213,
        rating: 3,
      },
    ];
    await collection.insertMany(fakeData);
    console.log('added data successfully');
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

addFakeData();
