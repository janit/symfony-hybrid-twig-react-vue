<?php

namespace AppBundle\State;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class AppState implements \JsonSerializable {

    public $sortBy = 'price';
    public $selectedCountry = 'Cuba';
    public $apartments = [];

    public function jsonSerialize() {

        $encoders = array(new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);

        return $serializer->serialize($this, 'json');

    }

    /**
     * @return string
     */
    public function getSortBy()
    {
        return $this->sortBy;
    }

    /**
     * @param string $sortBy
     */
    public function setSortBy($sortBy)
    {
        $this->sortBy = $sortBy;
    }

    /**
     * @return array
     */
    public function getApartments()
    {
        return $this->apartments;
    }

    /**
     * @param array $apartments
     */
    public function setApartments($apartments)
    {
        $this->apartments = $apartments;
    }



}