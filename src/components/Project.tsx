interface ProjectProps {
  categoria: string;
  nombre: string;
  descripcion: string;
  url: string;
  urlVisible: string;
}

const Project = ({
  categoria,
  urlVisible,
  nombre,
  url,

  descripcion,
}: ProjectProps) => {
  return (
    <div className='shadow-custom mb-4 h-fit w-full rounded-2xl border border-[#22251f] transition hover:border-[#7caa44] hover:bg-[#a7ff5407] active:scale-[0.98] lg:w-[48%]'>
      <a href={url} target='_blank'>
        <div className='flex flex-col gap-2 p-6'>
          <div className='flex items-center justify-between gap-3'>
            {/* <span className='flex items-center gap-4'>
            <a href='/'>Read More</a>
            <a href='/'>Visit</a>
          </span> */}
            <div className='mt-2 flex items-center gap-2'>
              <h5 className='text-white m-0'>{nombre}</h5>
              <span className='w-fit rounded-lg !bg-[#a7ff540c] px-3 py-[3px] text-xs text-[#a7ff54]'>
                {categoria}
              </span>
            </div>
          </div>

          <p className='my-0 text-sm text-[#a5aaa0]'>{descripcion}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
