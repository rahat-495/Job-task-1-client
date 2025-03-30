
import BlogComp from "./BlogComp";

interface Blog {
    id: number;
    title: string;
    subTitle: string;
    tags: string[];
    description: string;
    likes: number;
    views: number;
    images: string[];
    author: {
      name: string;
      profilePicture: string;
      publishedDate: string;
    };
}

const BlogsComp = () => {

    const blogs: Blog[] = [
        {
            id: 1,
            title: "Exciting Adventure in the Alps",
            subTitle: "Travel and you will be born for a second time",
            tags: ["Hiking", "Adventure Travel"],
            description: "Explore the breathtaking views and thrilling experiences of hiking through the majestic Alps. From scenic trails to challenging peaks, discover why this adventure is a must for nature enthusiasts. Whether you are a beginner or an expert hiker, the Alps provide an unforgettable journey filled with awe-inspiring landscapes, fresh mountain air, and a sense of tranquility that can only be experienced in the heart of nature.",
            likes: 300,
            views: 1200,
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7En-2eGkvDS7PSlyGGXgkiVDdVhdpKiqQ&s", "https://www.usnews.com/object/image/0000016f-afc5-df6f-a5ef-bfdf8a9f0000/45-guilin-getty.jpg?update-time=1579202217652&size=responsive640", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECOSRxjhbTUSxjOsUHjDYArcfHChEkFnP2UeA2Jw4vdV5TrABsz81BIyWvvwcy2a9l8"],
            author: {
                name: "Sam Guy",
                profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
                publishedDate: "December 15, 2024"
            }
        },
        {
            id: 2,
            title: "Exploring the Grand Canyon",
            subTitle: "A deep dive into the stunning landscapes of the Grand Canyon",
            tags: ["Hiking", "Nature"],
            description: "The Grand Canyon is one of the world's most breathtaking natural wonders, offering miles of scenic beauty, challenging trails, and a history carved by the Colorado River over millions of years. This blog takes you through the best hiking spots, mesmerizing sunrise and sunset points, and tips for making the most out of your visit to this geological marvel.",
            likes: 450,
            views: 1800,
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7En-2eGkvDS7PSlyGGXgkiVDdVhdpKiqQ&s", "https://www.usnews.com/object/image/0000016f-afc5-df6f-a5ef-bfdf8a9f0000/45-guilin-getty.jpg?update-time=1579202217652&size=responsive640", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECOSRxjhbTUSxjOsUHjDYArcfHChEkFnP2UeA2Jw4vdV5TrABsz81BIyWvvwcy2a9l8"],
            author: {
                name: "Emma Stone",
                profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
                publishedDate: "November 20, 2024"
            }
        },
        {
            id: 3,
            title: "Sunset in Santorini",
            subTitle: "Witness the magic of the golden hour in Greece",
            tags: ["Travel", "Photography"],
            description: "Santorini, with its white-washed buildings, deep blue domes, and stunning sunsets, is a paradise for travelers and photographers alike. In this blog, we explore the best spots to catch the golden hour, top activities to do in Santorini, and the rich cultural heritage that makes this Greek island a must-visit destination.",
            likes: 520,
            views: 2100,
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7En-2eGkvDS7PSlyGGXgkiVDdVhdpKiqQ&s", "https://www.usnews.com/object/image/0000016f-afc5-df6f-a5ef-bfdf8a9f0000/45-guilin-getty.jpg?update-time=1579202217652&size=responsive640", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECOSRxjhbTUSxjOsUHjDYArcfHChEkFnP2UeA2Jw4vdV5TrABsz81BIyWvvwcy2a9l8"],
            author: {
                name: "Liam Johnson",
                profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
                publishedDate: "October 10, 2024"
            }
        },
        {
            id: 4,
            title: "Exciting Adventure in the Alps",
            subTitle: "Travel and you will be born for a second time",
            tags: ["Hiking", "Adventure Travel"],
            description: "Explore the breathtaking views and thrilling experiences of hiking through the majestic Alps. From scenic trails to challenging peaks, discover why this adventure is a must for nature enthusiasts. Whether you are a beginner or an expert hiker, the Alps provide an unforgettable journey filled with awe-inspiring landscapes, fresh mountain air, and a sense of tranquility that can only be experienced in the heart of nature.",
            likes: 300,
            views: 1200,
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7En-2eGkvDS7PSlyGGXgkiVDdVhdpKiqQ&s", "https://www.usnews.com/object/image/0000016f-afc5-df6f-a5ef-bfdf8a9f0000/45-guilin-getty.jpg?update-time=1579202217652&size=responsive640", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECOSRxjhbTUSxjOsUHjDYArcfHChEkFnP2UeA2Jw4vdV5TrABsz81BIyWvvwcy2a9l8"],
            author: {
                name: "Sam Guy",
                profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
                publishedDate: "December 15, 2024"
            }
        },
        {
            id: 5,
            title: "Exploring the Grand Canyon",
            subTitle: "A deep dive into the stunning landscapes of the Grand Canyon",
            tags: ["Hiking", "Nature"],
            description: "The Grand Canyon is one of the world's most breathtaking natural wonders, offering miles of scenic beauty, challenging trails, and a history carved by the Colorado River over millions of years. This blog takes you through the best hiking spots, mesmerizing sunrise and sunset points, and tips for making the most out of your visit to this geological marvel.",
            likes: 450,
            views: 1800,
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7En-2eGkvDS7PSlyGGXgkiVDdVhdpKiqQ&s", "https://www.usnews.com/object/image/0000016f-afc5-df6f-a5ef-bfdf8a9f0000/45-guilin-getty.jpg?update-time=1579202217652&size=responsive640", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECOSRxjhbTUSxjOsUHjDYArcfHChEkFnP2UeA2Jw4vdV5TrABsz81BIyWvvwcy2a9l8"],
            author: {
                name: "Emma Stone",
                profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
                publishedDate: "November 20, 2024"
            }
        },
        {
            id: 6,
            title: "Sunset in Santorini",
            subTitle: "Witness the magic of the golden hour in Greece",
            tags: ["Travel", "Photography"],
            description: "Santorini, with its white-washed buildings, deep blue domes, and stunning sunsets, is a paradise for travelers and photographers alike. In this blog, we explore the best spots to catch the golden hour, top activities to do in Santorini, and the rich cultural heritage that makes this Greek island a must-visit destination.",
            likes: 520,
            views: 2100,
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR7En-2eGkvDS7PSlyGGXgkiVDdVhdpKiqQ&s", "https://www.usnews.com/object/image/0000016f-afc5-df6f-a5ef-bfdf8a9f0000/45-guilin-getty.jpg?update-time=1579202217652&size=responsive640", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECOSRxjhbTUSxjOsUHjDYArcfHChEkFnP2UeA2Jw4vdV5TrABsz81BIyWvvwcy2a9l8"],
            author: {
                name: "Liam Johnson",
                profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
                publishedDate: "October 10, 2024"
            }
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-20">
            {
                blogs.map((blog) => (
                    <BlogComp blog={blog} key={blog?.id}/>
                ))
            }
        </div>
    );
};

export default BlogsComp;
