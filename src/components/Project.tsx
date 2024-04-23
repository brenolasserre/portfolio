interface ProjectProps {
  categoria: string;
  nombre: string;
  descripcion: string;
  url: string;
  icon: string;
}

const Project = ({
  categoria,
  nombre,
  url,
  icon,
  descripcion,
}: ProjectProps) => {
  return (
    <div className='mb-4 rounded-xl border border-[#141814] p-6 transition hover:bg-[#0f110f]'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-3'>
          <img
            src={icon}
            alt={nombre}
            className='mb-2 h-16 w-16 rounded-xl bg-[#000] p-4'
          />
          {/* <span className='flex items-center gap-4'>
            <a href='/'>Read More</a>
            <a href='/'>Visit</a>
          </span> */}
          <div className='flex items-center gap-2'>
            <h5 className='m-0'>{nombre}</h5>
            <span className='w-fit rounded-lg !bg-[#70dd7d17] px-3 py-[3px] text-xs text-[#70dd7d]'>
              {categoria}
            </span>
          </div>
        </div>
        <p className='mt-2 text-sm'>{descripcion}</p>
      </div>
    </div>
  );
};

export default Project;
