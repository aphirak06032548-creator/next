const infoParamPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <>
      <p>infoParamPage : {id}</p>
    </>
  );
};

export default infoParamPage;