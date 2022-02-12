
const GifDetail = (props) => {
  const { params } = props;

  return (
    <div>
      Detalles {params.id}
    </div>
  );
};

export default GifDetail;