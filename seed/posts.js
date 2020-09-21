const db = require('../db/connection');
const Post = require('../models/post');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const posts = [
    {
      "title": "adipisicing enim labore",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Anim cillum irure commodo aliqua irure dolor veniam commodo. Est irure sint pariatur sit ullamco incididunt deserunt qui sit voluptate aliquip ipsum. Amet Lorem quis ipsum laborum adipisicing amet.\r\n",
      "author": "Best Chen"
    },
    {
      "title": "reprehenderit anim consectetur",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Deserunt pariatur et dolor mollit pariatur sint. Sunt non cillum ad enim sunt labore sint veniam qui. Ut tempor proident amet elit ipsum irure est consectetur laboris ex esse non mollit tempor.\r\n",
      "author": "Naomi Rhodes"
    },
    {
      "title": "eu nostrud velit",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Dolore sint nulla cillum deserunt. Cillum incididunt excepteur voluptate sit dolor esse consequat. Labore aute sit est exercitation ipsum nulla adipisicing. Occaecat laborum amet tempor veniam.\r\n",
      "author": "Dixon Finley"
    },
    {
      "title": "quis pariatur elit",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Cupidatat aliqua nulla minim ullamco et. Ipsum proident excepteur qui commodo reprehenderit. Adipisicing aliquip fugiat enim id eiusmod nisi id sit elit. Pariatur ex quis sint in aute tempor cupidatat nulla eu commodo qui sint nostrud occaecat. Incididunt sunt minim eiusmod aute elit irure dolore minim culpa quis mollit. Laborum proident Lorem esse elit veniam do consequat fugiat officia.\r\n",
      "author": "Pennington Jimenez"
    },
    {
      "title": "aute dolor aliquip",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Anim est ut ea anim ea mollit elit ad deserunt consectetur cillum labore. Non magna occaecat labore sint. Adipisicing voluptate et nostrud ad eiusmod dolor qui adipisicing id irure id elit anim irure. Dolor reprehenderit pariatur dolore aliqua quis nulla nisi sit occaecat proident fugiat labore eu magna. Tempor incididunt enim ipsum commodo.\r\n",
      "author": "Hardy Best"
    },
    {
      "title": "sunt non cupidatat",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Magna magna aliqua fugiat mollit laboris minim culpa aliquip aute cupidatat mollit in veniam sint. In laboris culpa anim velit ipsum ex sit in excepteur enim. Do adipisicing excepteur aliquip voluptate sit minim sit incididunt anim.\r\n",
      "author": "Gomez Buckley"
    },
    {
      "title": "pariatur labore sunt",
      "imgURL": "http://placehold.it/32x32",
      "content":
        "Laboris ipsum cillum exercitation aute minim. Voluptate dolore cupidatat esse in ullamco exercitation irure cillum officia eiusmod fugiat laborum minim tempor. Et veniam ut nulla sint ad incididunt nostrud ad et aliquip duis incididunt ipsum. Dolor in magna est commodo nisi in culpa ea do. Aute id exercitation ullamco cupidatat labore veniam deserunt incididunt qui nulla labore.\r\n",
      "author": "Brooke Duke"
    }
  ]
  await Post.insertMany(posts)
  console.log('Posts created')
}

const run = async () => {
  await main()
  db.close()
}

run()