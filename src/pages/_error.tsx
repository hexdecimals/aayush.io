const Error = ({
  statusCode = 404,
  message = 'Page Not Found',
}: {
  statusCode?: number;
  message?: string;
}) => {
  return (
    <div className="flex h-[calc(100vh-15vh)] flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-black text-white">{statusCode}</h1>
      <p className="mt-3 text-xl leading-7 tracking-wide">{message}</p>
    </div>
  );
};

export default Error;
