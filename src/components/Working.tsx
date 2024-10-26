const Profile = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className=" items-center pt-10 bg-stone-600 w-full">
          <div>
            <h1 className="text-3xl font-bold flex justify-center pt-4">
              Working For
            </h1>
          </div>
          <div>
            <p className=" p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aliquid, aut totam ducimus minima beatae temporibus,
              fugiat maiores illo, reiciendis voluptas facilis minus accusantium
              mollitia.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 bg-stone-600">
        <div>
          <h1 className="text-lg font-bold flex justify-center pt-10">PT Gudang Garam Jaya</h1>
          <p className="p-10">
            As a FrontEnd developer
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            veritatis nemo saepe possimus nihil voluptates commodi eos
            excepturi, ipsum nostrum asperiores numquam, obcaecati temporibus
            labore?
          </p>
        </div>
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48"
            alt="jpg"
            className="h-[300px] w-[300px] object-cover rounded-2xl flex mx-auto justify-between"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 rounded-lg bg-stone-600">
        <div>
            <img src="https://media.licdn.com/dms/image/v2/D4D12AQFnxb2cyB4ExQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1669297731190?e=2147483647&v=beta&t=sRnBowDzBe2IKcdXjmCd8R94qJ4SlAJgst-0QiUIEEA"
            alt="jpg"
            className="h-[300px] w-[300px] object-cover rounded-2xl flex mx-auto justify-between" />
        </div>
        <div>
          <h1 className="text-lg font-bold flex justify-center pt-10">PT Gudang Tembakau Jaya</h1>
          <p className="p-10">
            as a backEnd developer
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            ipsum aperiam sit excepturi nostrum nisi, magnam laborum, illum
            consequuntur cupiditate iure maiores architecto minima aspernatur!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 bg-stone-600">
        <div>
          <h1 className="text-lg font-bold flex justify-center pt-10">
            PT Jaya Jaya Jaya
            </h1>
          <p className="p-10">
            As a Fullstack developer
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            veritatis nemo saepe possimus nihil voluptates commodi eos
            excepturi, ipsum nostrum asperiores numquam, obcaecati temporibus
            labore?
          </p>
        </div>
        <div>
          <img
            src="https://www.schoolofit.co.za/wp-content/uploads/2023/03/What-is-full-stack-web-development.png"
            alt="jpg"
            className="h-[300px] w-[300px] object-cover rounded-2xl flex mx-auto justify-between"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
