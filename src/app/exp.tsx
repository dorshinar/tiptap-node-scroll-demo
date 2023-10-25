"use client";

import { Fragment, PropsWithChildren, useState } from "react";

export function Exp() {
  const [a, setA] = useState(false);

  const A = a ? Wrapper : Fragment;

  return (
    <div className="flex flex-col gap-6">
      <p>Vanilla HTML: </p>
      <div className="flex gap-4 items-start overflow-auto">
        <button onClick={() => setA((_a) => !_a)}>Click</button>
        <div
          className="tiptap ProseMirror"
          contentEditable="true"
          translate="no"
        >
          <A>
            <p data-private="redact" className="pb-2">
              Disney: A World of Magic and Imagination
            </p>
            <p data-private="redact" className="pb-2">
              When we think of Disney, we are transported to a world of magic,
              wonder, and imagination. For nearly a century, Disney has
              enchanted audiences of all ages with its enchanting stories. From
              its iconic animated films to its theme parks and resorts, Disney
              continues to be a beloved brand that holds a special place in the
              hearts of millions around the world.
            </p>
            <p data-private="redact" className="pb-2">
              The Walt Disney Company, founded by Walt Disney and Roy O. Disney
              in 1923, began as a small animation studio in Hollywood. Little
              did they know that their humble beginnings would pave the way for
              a global entertainment empire. The release of their first animated
              feature film, "Snow White and the Seven Dwarfs", in 1937,
              profoundly influenced the history of animation and set the stage
              for their future successes.
            </p>
            <p data-private="redact" className="pb-2">
              One of the most iconic aspects of Disney is its theme parks.
              Disneyland, located in Anaheim, California, was the first-ever
              theme park created by Walt Disney himself. Since its opening in
              1955, Disneyland has become a place where dreams come true. The
              park is divided into different lands, each with its own unique
              attractions, shows, and experiences. From the enchanting Sleeping
              Beauty Castle to the thrilling rides like Space Mountain and
              Pirates of the Caribbean, Disneyland offers something for
              everyone.
            </p>
            <p data-private="redact" className="pb-2">
              Disneyland's success paved the way for the creation of other
              Disney theme parks around the world. Walt Disney World in Florida,
              Tokyo Disneyland, Disneyland Paris, Hong Kong Disneyland, and
              Shanghai Disneyland have all become popular destinations for
              tourists seeking to immerse themselves in the magic of Disney.
              These parks not only bring Disney's beloved characters to life but
              also offer breathtaking shows, parades, and fireworks, creating a
              truly immersive experience for visitors.
            </p>
            <p data-private="redact" className="pb-2">
              Beyond the theme parks, Disney also operates numerous resorts,
              hotels, and cruise lines that cater to the needs of travelers.
              Whether you want to stay in a luxurious hotel overlooking
              Cinderella's Castle or embark on a Disney cruise to explore exotic
              destinations, Disney ensures that every aspect of your vacation is
              filled with magic and unparalleled service.
            </p>
            <p data-private="redact" className="pb-2">
              In recent years, Disney has embraced the digital age with the
              launch of its streaming service, Disney+. With a vast library of
              films, TV shows, and exclusive content, Disney+ has become a go-to
              platform for Disney enthusiasts to enjoy their favorite movies and
              shows anytime, anywhere. From classic animations to new releases
              and original series, Disney+ offers a treasure trove of
              entertainment for subscribers of all ages.
            </p>
            <p data-private="redact" className="pb-2">
              Disney's impact extends beyond entertainment. The company has also
              been actively involved in philanthropy and corporate social
              responsibility initiatives. Through its Disney Conservation Fund,
              Disney has supported numerous environmental projects and
              initiatives to protect wildlife and conserve natural resources.
              Additionally, Disney has partnered with organizations around the
              world to bring joy and happiness to children facing adversity,
              making a positive difference in their lives.
            </p>
          </A>
          <p data-private="redact" className="pb-2">
            In conclusion, Disney is more than just a brand; it is a symbol of
            magic, imagination, and dreams coming true. From its iconic animated
            films to its theme parks, resorts, and digital offerings, Disney
            continues to captivate audiences around the world. With its
            commitment to storytelling, innovation, and creating unforgettable
            experiences, Disney will undoubtedly continue to be a beloved and
            influential force in the entertainment industry for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className="react-renderer node-test">
      <div
        className="border-emerald-400 border-2"
        data-node-view-wrapper=""
        style={{ whiteSpace: "normal" }}
      >
        <div data-node-view-content="" style={{ whiteSpace: "pre-wrap" }}>
          <div style={{ whiteSpace: "inherit" }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
