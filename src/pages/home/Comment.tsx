const Comment = () => {
  return (
    <div className="p-20">
      <div className="relative flex items-center">
        <h1 className="absolute w-full text-3xl md:text-6xl mb-8 font-extrabold">
          What everyone says
        </h1>
        <img src="https://i.postimg.cc/XNQTv9Sg/Vector-14.png" alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-20">
        <div className="col-span-1 p-8">
          <p>
            Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.
            Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae
            quis cras vitae praesent morbi adipiscing purus consectetur mi.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <img
              src="https://imagizer.imageshack.com/img922/9130/zRWyNK.png"
              alt=""
            />
            <div>
              <h1>Hellen Jummy</h1>
              <h6>Financial Counselor</h6>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-8">
          <p>
            Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut
            id. In tortor turpis viverra sagittis ultrices nisi, nec tortor.
            Vestibulum, ultrices ultricies neque, hac ultricies dolor.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <img
              alt=""
              src="https://imagizer.imageshack.com/img922/7536/JLiZVq.png"
            />
            <div>
              <h1>Ralph Edwards</h1>
              <h6>Math Teacher</h6>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-8">
          <p>
            Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et
            cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat
            tellus, congue malesuada sit nisl donec a.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <img
              src="https://imagizer.imageshack.com/img924/7021/upGHwZ.png"
              alt=""
            />
            <div>
              <h1>Hellena John</h1>
              <h6>Psychology Student</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
