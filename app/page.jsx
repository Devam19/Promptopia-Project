import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Your thoughts!!!</span>
      </h1>

      <p className="desc text-center">
        Tweeter is an open-source tool for modern world to
        discover, create and share creative thoughts on topics
      </p>

      <Feed />
    </section>
  );
};

export default Home;
