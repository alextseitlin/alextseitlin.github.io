import Alert from "./index";
import cn from "classnames";

type Props = {
  published?: boolean;
};

export default function Published({ published }: Props) {
  return (
    <Alert style="dark">This page is a not published.</Alert>
    // <div
    //   className={cn("border-b", {
    //     "bg-neutral-800 border-neutral-800 text-white": published,
    //     "bg-neutral-50 border-neutral-200": !published,
    //   })}
    // >
    //   <Container>
    //     <div className="py-2 text-center text-sm">
    //       published: {published}
    //       {published ? (
    //         <>
    //           This page is a not published.{" "}
    //           <a
    //             href="/api/exit-preview"
    //             className="underline hover:text-teal-300 duration-200 transition-colors"
    //           >
    //             Click here
    //           </a>{" "}
    //           to exit preview mode.
    //         </>
    //       ) : (
    //         <>
    //           The source code for this blog is{" "}
    //           <a
    //             href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
    //             className="underline hover:text-blue-600 duration-200 transition-colors"
    //           >
    //             available on GitHub
    //           </a>
    //           .
    //         </>
    //       )}
    //     </div>
    //   </Container>
    // </div>
  );
}

Alert;
