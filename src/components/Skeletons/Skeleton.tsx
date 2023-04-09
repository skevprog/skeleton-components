import './skeleton.css'

function Skeleton({ classes }: { classes: string }) {
   const classNames = `skeleton ${classes} animate-pulse`

   return (
      <div className={classNames} />
   )
}

export default Skeleton;
